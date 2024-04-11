import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material'


const Listings = () => {
    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell>Pizza</TableCell>
                        <TableCell>fun place</TableCell>
                        <TableCell>12hours</TableCell>
                        <TableCell>118 mlk</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell>tacos</TableCell>
                        <TableCell>gross</TableCell>
                        <TableCell>5hrs</TableCell>
                        <TableCell>021 MLK</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell>burgers</TableCell>
                        <TableCell>ok</TableCell>
                        <TableCell>9hrs </TableCell>
                        <TableCell>3654 MLK</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings;