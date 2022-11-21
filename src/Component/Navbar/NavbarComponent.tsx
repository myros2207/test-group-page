// // import React from 'react';
// import {Link} from "react-scroll";
// // import { Box, Flex } from '@chakra-ui/react';
// // import { VisitHoverLink } from './NavbarStyled';



// // const NavbarComponent = () => {
// //     return (
// //         <div>
            
// //             <Box left={"10rem"} position={"fixed"} bg="yellow" color={"black"}>
// //                 <Flex>
// //              <VisitHoverLink><Link to="1" spy={true} smooth={true} offset={-50} duration={500}   >To test1</Link>
// //              <br /></VisitHoverLink>
// //              <Link to="2" spy={true} smooth={true} offset={-50} duration={500}    >To test2</Link>
// //              <br />
// //              <Link to="3" spy={true} smooth={true} offset={-50} duration={500}   >To test3</Link>
// //              </Flex>
// //              </Box>
            
// //         </div>
// //     );
// // };

// // export default NavbarComponent; 

// import React, { ReactNode } from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
//   Image,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';
// import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
//   to: string
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome, to: '#Home' },
//   { name: 'Realizacje', icon: FiTrendingUp, to: "#Portfolio" },
//   { name: 'Kontakt', icon: FiCompass, to: "Kontakt" },
//   // { name: 'Favourites', icon: FiStar },
//   // { name: 'Settings', icon: FiSettings },
// ];

// const  NavbarComponent =() => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box minH={["0vh","100vh"]}  w={["0","10vw"]} position={["fixed","absolute"]} 
//     // bg={useColorModeValue('gray.100', 'gray.900')}
//     >
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {/* {children} */}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//     const logo = require("../../IMG/Group.png")
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         {/* LOGO */}
//          <Link href="#Home"> <Image src={logo}/></Link>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon} to={link.to}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
//   to: string
// }
// const NavItem = ({ icon, children, to, ...rest}: NavItemProps) => {
//   return (
//     <Link href={to} style={{ textDecoration: 'none', scrollBehavior: "smooth" }} _focus={{ boxShadow: 'none' }}>
      
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//     const logo = require("../../IMG/Group.png")
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         <Image src={logo}></Image>
//       </Text>
//     </Flex>
//   );
// };

// export default NavbarComponent


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack, Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
//@ts-ignore  
import {Link} from 'react-scroll'


const Links = ['Home', 'Portfolio', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={children}
    offset={-55}
    duration={600}
    spy={true}
    smooth={true}
    >
    {children}
  </Link>
);


const logo = require("../../IMG/Group.png")
const NavbarComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position={"fixed"}  w="100vw" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image w={"10rem"} src={logo}/></Box>

            <button onClick={onClose}>
              <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink  key={link}>{link}</NavLink>
              ))}
            </HStack>
            </button>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
               
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
export default NavbarComponent