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
  | `/dashboard/components`
  | `/dashboard/components/accordion`
  | `/dashboard/components/alert`
  | `/dashboard/components/avatar`
  | `/dashboard/components/button`
  | `/dashboard/components/calendar`
  | `/dashboard/components/card`
  | `/dashboard/components/file-upload`
  | `/dashboard/components/file-upload/input`
  | `/dashboard/components/file-upload/multiple`
  | `/dashboard/components/file-upload/single`
  | `/dashboard/components/free`
  | `/dashboard/components/input`
  | `/dashboard/components/modal-overlay`
  | `/dashboard/components/select`
  | `/dashboard/components/stepper`
  | `/dashboard/components/table`
  | `/dashboard/components/tabs`
  | `/dashboard/components/tooltip`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
