import React from 'react'
import { Box, Grid } from '@mui/material';

export default function Gred() {
	return (
		<div>
			<h1>Grid</h1>
			<Grid container spacing={2} bgcolor={"lightcoral"}>
				<Grid item xs={8} lg={3} sm={6} md={4} bgcolor={"green"}>
					<Box>Box 1</Box>
				</Grid>
				<Grid item xs={8} lg={3} sm={6} md={4} bgcolor={"red"}>
					<Box>Box 2</Box>
				</Grid>
				<Grid item xs={8} lg={3} sm={6} md={4} bgcolor={"yellow"}>
					<Box>Box 3</Box>
				</Grid>
				<Grid item xs={8} lg={3} sm={6} md={4} bgcolor={"blue"}>
					<Box>Box 4</Box>
				</Grid>
			</Grid>
		</div>
	)
}
