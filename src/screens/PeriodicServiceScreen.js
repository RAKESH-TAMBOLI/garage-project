import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import ServiceCart from '../components/ServiceCart'
import data from '../data'
const PeriodicServiceScreen = () => {
    return (
        <Box className='border-2 w-96 rounded-md'>
            <Heading
                as='h3'
                class='text-2xl tracking-wider font-bold text-blue-900'>
                PERIODIC SERVICE
            </Heading>
            {data.map(data => (
                <ServiceCart key={data.id} data={data} />
            ))}
        </Box>
    )
}

export default PeriodicServiceScreen
