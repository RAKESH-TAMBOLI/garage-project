import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Flex,
    Heading,
    Link,
    Box,
    Icon,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    Image
} from '@chakra-ui/react'
import { HiUser } from 'react-icons/hi'
import { IoNotificationsCircle, IoSearchCircle } from 'react-icons/io5'
const MenuLink = ({ children, url }) => {
    return (
        <Link
            as={RouterLink}
            class='no-underline mx-10 text-md font-semibold items-center
                hover:text-gray-600 transition duration-500 ease-in-out'
            to={url}>
            {children}
        </Link>
    )
}
const MenuLinks = ({ children, url }) => (
    <Link
        as={RouterLink}
        to={url}
        class='mr-5 hover:no-underline focus:no-underline font-semibold'>
        {children}
    </Link>
)

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            as='header'
            align='center'
            justify='space-around'
            backgroundColor='gray.200'
            shadow='md'
            px='3'
            py='3'
            w='100%'>
            <Box>
                <Heading as='h1' class='text-2xl text-blue-600'>
                    <Link
                        as={RouterLink}
                        class='no-underline mx-10 text-md font-semibold items-center
                hover:text-gray-500 transition duration-500 ease-in-out'
                        to='/'>
                        Master Garage
                    </Link>
                </Heading>
            </Box>
            <Box className='flex items-center'>
                <MenuLink url='/'>
                    <Text>Home</Text>
                </MenuLink>
                <MenuLink url='/'>
                    <Text>About Us</Text>
                </MenuLink>
                <MenuLink url='/'>
                    <Text>Join Us</Text>
                </MenuLink>
                <MenuLink url='/mastergarage/periodicservice'>
                    <Text>Service</Text>
                </MenuLink>
                <MenuLink url='/'>
                    <Text>FAQ's</Text>
                </MenuLink>
                <Box>
                    <Icon
                        as={IoSearchCircle}
                        w={8}
                        h={8}
                        mr='5'
                        color='blue.500'
                    />
                </Box>
                <Box>
                    <Icon
                        as={IoNotificationsCircle}
                        w={7}
                        h={7}
                        mr='1'
                        color='blue.500'
                    />
                </Box>
                <Box>
                    <div>
                        <Icon
                            as={HiUser}
                            color='blue.500'
                            w={6}
                            h={6}
                            ml='3'
                            onClick={onOpen}
                        />
                        <title>User</title>
                    </div>
                    <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader>
                                <Flex align='center'>
                                    <Image
                                        src='/images/user.jpg'
                                        alt='user'
                                        w='20%'
                                        rounded='xl'
                                    />
                                    <Text class='text-xl tracking-wider text-blue-800 font-semibold'>
                                        Rakesh
                                    </Text>
                                </Flex>
                            </DrawerHeader>
                            <DrawerBody>
                                <div class='flex flex-col'>
                                    <MenuLinks url='/mastergarage/help'>
                                        Help & support
                                    </MenuLinks>
                                    <MenuLinks url='/mastergarage/favourites'>
                                        Favourites
                                    </MenuLinks>
                                    <MenuLinks url='/mastergarage/refer'>
                                        Refer & Earn
                                    </MenuLinks>
                                    <MenuLinks url='/mastergarage/contact'>
                                        Contact us
                                    </MenuLinks>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>
        </Flex>
    )
}
export default Header

// {/* <Flex
//             as='header'
//             align='center'
//             justify='space-between'
//             // wrap='wrap'
//             py='6'
//             px='6'
//             background='gray.100'
//             shadow='md'
//             pos='fixed'
//             w='100%'
//             // top='1'
//             zIndex={2}>
//             {/* Logo  */}
//             {/* <Box className='flex justify-between items-center'> */}
//             <Box>
//                 {/* <Text className='text-2xl text-red-600'>Header</Text> */}
//                 <Heading as='h1' class='text-2xl text-blue-600'>
//                     {/* Rakesh */}
//                     <Link as={RouterLink} to='/'>
//                         Master Garage
//                     </Link>
//                 </Heading>
//             </Box>
//             {/* <div class='flex flex-row shadow-md fixed w-full top-0 z-10 py-4 px-4 bg-gray-700'> */}
//             <Box className='flex flex-row fixed w-full py-4 px-4 '>
//                 <MenuLink url='/'>
//                     <Text>Home</Text>
//                 </MenuLink>
//                 <MenuLink url='/'>
//                     <Text>Address</Text>
//                 </MenuLink>
//                 <MenuLink url='/'>
//                     <Text>Details</Text>
//                 </MenuLink>
//                 <MenuLink url='/'>
//                     <Text>Contact</Text>
//                 </MenuLink>
//             </Box>
//             {/* </div> */}
//             {/* <Box>
//                 {/* <div>
//                     <MenuLink>
//                         <Text>Home</Text>
//                     </MenuLink>
//                 </div> */}
//             {/* </Box> */}
//             {/* </Box> */}
//         </Flex> */}
