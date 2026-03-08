// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/components`
  | `/components/button-components`
  | `/components/input-components`
  | `/components/modal-components`
  | `/components/select-components`
  | `/dashboard`
  | `/dashboard/accordion`
  | `/dashboard/alert`
  | `/dashboard/avatar`
  | `/dashboard/button`
  | `/dashboard/card`
  | `/dashboard/file-upload`
  | `/dashboard/input`
  | `/dashboard/modal-overlay`
  | `/dashboard/select`
  | `/dashboard/stepper`
  | `/dashboard/tabs`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
