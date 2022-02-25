import React from 'react'
import {
    Text,
    Button,
    Box,
    Collapse,
    useDisclosure,
    Image,
    Tag,
    Flex,
    Heading
} from '@chakra-ui/react'

const ServiceCart = ({ data }) => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            {/* <Box> */}
            <Box className='w-96 mb-2 border-2 bg-gray-400 rounded-md'>
                <Box className='flex justify-around'>
                    <Box mt='2'>
                        <Text class='text-lg font-semibold tracking-wider text-blue-900'>
                            {data.name}
                        </Text>
                        <Text class='text-sm text-gray-500'>
                            {data.distance}
                        </Text>
                        <Text class='text-sm mb-4 text-gray-500'>
                            {data.service}
                        </Text>
                    </Box>
                    <Image
                        src={data.img}
                        alt={data.name}
                        mt='2'
                        rounded='md'
                        objectFit='cover'
                        w='20%'
                        objectFit='cover'
                    />
                </Box>
                <Button
                    variantColor='blue'
                    ml='6'
                    h='7'
                    mb='2'
                    onClick={onToggle}>
                    <Text class='text-md mb-1 tracking-wider text-blue-800 font-semibold'>
                        see more
                    </Text>
                </Button>
                <Collapse in={isOpen} unmountOnExit>
                    {data.includes.map((item, idx) => (
                        <Flex mb='1'>
                            <Tag
                                ml='2'
                                mr='2'
                                size='sm'
                                variant='solid'
                                colorScheme='teal'>
                                ✓
                            </Tag>
                            <Text>{item}</Text>
                        </Flex>
                    ))}
                </Collapse>
            </Box>
        </>
    )
}
export default ServiceCart
