import {Box, Flex} from '@chakra-ui/react';
import React from 'react';

const ContactComponent = () => {
    return (
        <div id='Contact'>
            <Box h="100vh" bg="#809ca6">
                <Flex flexDirection={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
                    Contact
                </Flex>
            </Box>
        </div>
    );
};

export default ContactComponent;