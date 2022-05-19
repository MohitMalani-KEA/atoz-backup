import React from 'react'
import { useSpring, animated as a } from '@react-spring/web'
import EmailIcon from '@mui/icons-material/Email'
import { styled, Typography } from '@mui/material'
import theme from '../../src/theme'

const SuccessMessage = () => {
	const styles = useSpring({ from: { opacity: 0 }, opacity: 1 })

	return (
		<SuccessMessageWrapper>
			<SuccessContainer style={styles}>
				<Typography variant='h4' color={'secondary'} gutterBottom>
					Message sent successfully
				</Typography>
				<EmailIcon fontSize='large' color='primary' />
			</SuccessContainer>
		</SuccessMessageWrapper>
	)
}

export default SuccessMessage

const SuccessMessageWrapper = styled('div')({
	height: '100%',
	minHeight: '400px',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: theme.spacing(3),
})
const SuccessContainer = styled(a.div)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})
