import crypto from 'crypto'

export function sha256Hex(input: string): string {
  return crypto.createHash('sha256').update(input, 'utf8').digest('hex')
}

const pythonLikeStringify = (obj: Record<string, unknown>) => {
  const entries = Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  return `{${entries.map(([k, v]) => `'${k}': '${v}'`).join(', ')}}`
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

// Utility to create the signature as: sha256(secret + concatenated_values_sorted_by_key)
export function createSignature(secret: string, payload: Record<string, unknown>): string {
  const sorted = Object.entries(payload).sort(([a], [b]) => a.localeCompare(b))
  const values = sorted.map(([_, value]) => {
    if (isRecord(value)) {
      return pythonLikeStringify(value)
    }
    return String(value)
  })

  const concatenated = values.join('')

  return sha256Hex(secret + concatenated)
}
