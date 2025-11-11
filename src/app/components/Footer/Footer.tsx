import { headers as getHeaders } from 'next/headers.js'
import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import style from './Footer.module.css'
import "flag-icons/css/flag-icons.min.css";

export default async function Footer() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  return (
    <>
      <div className={style.footer}>
        <div>
          <h3>Reiser & Reise pakker</h3>
          <p>Nicaragua, Los Clavos</p>
          <p>Costa Rica, Santa Teresa</p>
          <p>Portugal Ericeira</p>
          <p>Bali, Canggu</p>
          <p>Sri Lanka, Ahangama</p>
          <p>El Salvador, El Sunzal</p>
        </div>
        <div>
          <h3>Utforsk Våre Opplevelser</h3>
          <p>Surfing</p>
          <p>Camping</p>
          <p>Yoga</p>
          <p>Hiking</p>
        </div>
        <div>
          <h3>Kurs</h3>
          <p>SurfeKurs</p>
          <p>Yoga Kurs</p>
          <p>Overlevelses kurs</p>
        </div>

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
          <button type="button">Kontakt oss</button>
        </div>
      </div>
       <div className={style.flag}>
          <span className="fi fi-ni"></span>
          <span className="fi fi-cr"></span>
          <span className="fi fi-pt"></span>
          <span className="fi fi-sv"></span>
          <span className="fi fi-do"></span>
          <span className="fi fi-no"></span>
          <span className="fi fi-bl"></span>
          <span className="fi fi-bb"></span>
          <span className="fi fi-nz"></span>
          <span className="fi fi-ve"></span>
        </div>
    </>
  )
}

/* https://flagicons.lipis.dev/ */