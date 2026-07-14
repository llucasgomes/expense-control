'use client'


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { SummaryPerson } from '@/types/summary'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { PersonDetails } from './person-details'

export const columns: ColumnDef<SummaryPerson>[] = [
  {
    accessorKey: 'personId',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Foto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell(props) {
      return(
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      )
    },
  },
  {
    accessorKey: 'personName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
   {
    accessorKey: 'age',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Idade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell(props) {
      return(
        <p>
          {props.getValue<number>()} anos
        </p>
      )
    }
  },
  {
    accessorKey: 'totalExpenses',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Despesas Totais
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell(props) {
      return(
        <p className="text-red-500">
          {props.getValue<number>().toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      )
    },
  },
  {
    accessorKey: 'totalIncome',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Renda Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell(props) {
      return(
        <p className="text-green-500">
          {props.getValue<number>().toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      )
    },
  },
   {
    accessorKey: 'balance',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 uppercase hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Saldo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell(props) {
      const balance = props.getValue<number>()
      const balanceColor = balance < 0 ? 'text-red-500' : 'text-green-500'

      return(
        <p className={balanceColor}>
          {balance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      )
    }
  },
  {
    accessorKey: 'actions',
    header: () => {
      return (
        <div className="flex w-full items-center justify-center uppercase hover:bg-transparent">
          ações
        </div>
      )
    },
    cell: ({ row }) => {
      const personId = row.original.personId
  
   console.log(personId)
      return (
        <div className="flex h-full w-full items-center justify-center gap-8 pr-6">
          
          <PersonDetails personId={personId} />
        </div>
      )
      
    }
  }
]