import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { useCodeStore } from '../stores/provider';
import { toJS } from 'mobx';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export const CodesComponent = observer(function CodesComponent() {
    const codeStore = useCodeStore();

    const rows = toJS(codeStore.codes);

    if (rows.length === 0) {
        return null;
    }

    const columns = Object.keys(rows[0]).map((columnName: string) => {
        return {
            field: columnName,
            headerName: columnName,
        };
    });

    return (
        <div style={{ width: '100%' }}>
            <TableContainer style={{ justifyContent: 'center', display: 'flex' }} component={Paper}>
                <Table size="small" sx={{ minWidth: 280, maxWidth: 560 }} aria-label="codes table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => {
                                return <TableCell key={column.headerName}>{column.headerName}</TableCell>;
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.place}</TableCell>
                                <TableCell align="left">{row.code}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
});
