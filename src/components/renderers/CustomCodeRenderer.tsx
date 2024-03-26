'use client'

function CustomCodeRenderer({ data }: any) {
  data

  return (
    <pre className="rounded-md bg-gray-800 p-4">
      <code className="text-sm text-gray-100">{data.code}</code>
    </pre>
  )
}

export default CustomCodeRenderer
