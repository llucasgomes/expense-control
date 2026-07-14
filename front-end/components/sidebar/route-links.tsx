import { LayoutDashboard, ReceiptText, User } from "lucide-react"
import { ReactNode } from "react"

export type RoutesLink = {
  title: string
  path: string
  icon: ReactNode
}

export const routesLink = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <LayoutDashboard />
  },
  {
    title: 'Pessoas',
    path: '/people',
    icon: <User />
  },
  {
    title: 'Transações',
    path: '/transactions',
    icon: <ReceiptText />
  }]
