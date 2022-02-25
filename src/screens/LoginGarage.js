import React, { useState } from 'react'
import { Text, Input, Button, Box, Image } from '@chakra-ui/react'

const LoginGarage = () => {
    const [location, setLocation] = useState('')
    const submitHandler = e => {
        e.preventDefault()
        // Navigate('/booking/garage')
    }
    return (
        <Box mt='1'>
            <Image
                src='/images/carGarage.jpg'
                w='100%'
                h=''
                objectFit='cover'
            />
            {/* <Text className='text-2xl text-red-600'>rakesh tamboli</Text> */}
            <Box className='flex items-center'>
                {/* <form onSubmit={submitHandler}> */}
                <Input
                    type='tel'
                    mt='2'
                    w='30%'
                    placeholder='Enter Pin Code'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <Button
                    onClick={submitHandler}
                    colorScheme='teal'
                    type='submit'
                    ml='1'
                    mt='1'
                    size='md'>
                    Submit
                </Button>
                {/* </form> */}
            </Box>
            <Box className='flex justify-around items-center mt-4'>
                <Box className=''>
                    <Image
                        src='/images/oneStopSolution.jpg'
                        alt='oneStopSolution'
                        objectFit='cover'
                        rounded='md'
                        w='50%'
                        ml='4'
                    />
                    <Text>One Stop Solution</Text>
                </Box>
                <Box>
                    <Image
                        src='/images/peaceOfMind.jpg'
                        alt='peaceOfMind'
                        objectFit='cover'
                        rounded='md'
                        w='50%'
                    />
                    <Text>Peace Of Mind</Text>
                </Box>
                <Box>
                    <Image
                        src='/images/freedomOfChoice.jpg'
                        alt='freedomOfChoice'
                        objectFit='cover'
                        rounded='md'
                        w='50%'
                    />
                    <Text>Freedom Of Choice</Text>
                </Box>
                <Box>
                    <Image
                        src='/images/partner.jpg'
                        alt='partner'
                        objectFit='cover'
                        rounded='md'
                        w='15%'
                    />
                    <Text>Truted Partner</Text>
                </Box>
                {/* <Image src='' alt='' objectFit='cover' />
                <Image src='' alt='' objectFit='cover' />
                <Image src='' alt='' objectFit='cover' /> */}
            </Box>
        </Box>
    )
}
export default LoginGarage
