import { NextResponse } from 'next/server'
import path from 'path'
import { writeFile } from 'fs/promises'

export const POST = async (req: Request) => {
  const formData = await req.formData()

  // const body = await req.json()
  const file = formData.get('file') as File
  // console.log(body.name)
  // const file = body.file as File
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = file.name
  console.log(filename)
  try {
    await writeFile(
      path.join(process.cwd(), 'public/uploads/' + filename),
      buffer
    )
    return NextResponse.json({
      Message: 'Success',
      status: 201,
      fileUrl: `http://localhost:3001/api/uploads/${filename}`,
    })
  } catch (error) {
    console.log('Error occured ', error)
    return NextResponse.json({ Message: 'Failed', status: 500 })
  }
}
