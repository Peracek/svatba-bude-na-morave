import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Registration } from '../types/registration'

const headers: { [k in keyof Registration]: string } = {
  name: 'Jméno',
  willAttend: 'Zúčastní se',
  accomodation: 'Ubytování',
  openToCarpool: 'Spolujízda',
  carpoolInfo: 'Spolujízda info',
  note: 'Poznámka',
}

const columnOrder: Array<keyof Registration> = [
  'name',
  'willAttend',
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
