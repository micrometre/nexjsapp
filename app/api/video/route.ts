import {NextRequest, NextResponse} from "next/server";
import { headers } from 'next/headers'
import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/upload/alprVideo.mp4')
const imageBuffer = fs.readFileSync(filePath)

export async function GET(request: Request) {
    return new Response(imageBuffer, {
      status: 200,
      headers: {
       'Content-Type': 'video/mp4',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }