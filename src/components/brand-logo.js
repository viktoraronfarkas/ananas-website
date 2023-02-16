import * as React from "react"
import logoWhite from '../assets/logo_white.png'
import { brandLogo } from './brand-logo.css'

export default function AnanasLogo() {
  return (
    <img className={brandLogo} src={logoWhite} alt={"Ananas Logo"} />
  )
}
