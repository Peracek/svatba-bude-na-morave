import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import { Registration } from '../types/registration'

const headers: { [k in keyof Registration]: string } = {
  name: 'Jméno',
  willAttend: 'Zúčastní se',
  friday: 'Přijede v pátek',
  accomodation: 'Ubytování',
  openToCarpool: 'Spolujízda',
  carpoolInfo: 'Spolujízda info',
  note: 'Poznámka',
}

const columnOrder: Array<keyof Registration> = [
  'name',
  'willAttend',
  'friday',
  'accomodation',
  'openToCarpool',
  'carpoolInfo',
  'note',
]

export const RegistrationsList = ({
  data,
}: {
  data: { [k: string]: Registration }
}) => {
  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Přihlášení</TableCell>
              {columnOrder
                .map(colId => headers[colId])
                .map(label => (
                  <TableCell id={label}>{label}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data).map(([key, registration]) => (
              <TableRow key={key}>
                <TableCell>{new Date(+key).toLocaleDateString()}</TableCell>
                {columnOrder
                  .map(colId => registration[colId])
                  .map(value => (
                    <TableCell>{value}</TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
