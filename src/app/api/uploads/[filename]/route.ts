import { NextResponse } from 'next/server'
import path from 'path'
import { NextRequest } from 'next/server'
import { promises } from 'fs'
import { fileTypeFromFile } from 'file-type'

export const GET = async (
  req: NextRequest,
  { params }: { params: { filename: string } }
) => {
  const { filename } = params

  try {
    const filePath = path.join(process.cwd(), 'public/uploads/' + filename)
    const file = await promises.readFile(filePath)
    const { ext, mime } = await fileTypeFromFile(filePath)
    return new Response(file, {
      status: 201,
      headers: {
        'Content-Type': mime,
      },
    })
  } catch (error) {
    console.log('Error occured ', error)
    return NextResponse.json({ Message: 'Failed', status: 500 })
  }
}
