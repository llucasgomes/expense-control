'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RoutesLink } from './route-links'




type AppSidebarProps = {
  listMenu: RoutesLink[]
}

export function AppSidebar({ listMenu }: AppSidebarProps) {

  const pathname = usePathname()
  console.log('pathname', pathname)

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="items-center justify-center rounded-t-lg">
       <h1>Gerenciador de Despesas</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {listMenu.map((item) => {
                const isActive =
                  item.path === '/' ? pathname === item.path : pathname.startsWith(item.path)
                    

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="hover:bg-primary data-[active=true]:bg-sidebar-primary data-[active=true]:text-white"
                      isActive={isActive}
                      tooltip={item.title}
                      
                    >
                      <Link href={item.path} className="flex items-center gap-2 w-full">
                        {item.icon}
                        <span>{item.title}</span>
                       
                     
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={user} listMenu={listMenu} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}