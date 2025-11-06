import { headers as getHeaders } from 'next/headers.js'
import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import style from './Footer.module.css'

export default async function Footer() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  return (
    <>
      <div className={style.footer}>
        
        <div className={style.links}>
          {user && <p>Du er logget in som {user.email}</p>}
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
        </div>
      </div>
    </>
  )
}
