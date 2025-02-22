import {Flex, Heading, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex p="2rem" direction="column" alignItems="center">
            <Heading as="h1" size="4xl"
                     className="tasklist-title">
                TaskList
            </Heading>
            <Text mt="1rem" className="tasklist-slogan">
                Votre tasklist
            </Text>
        </Flex>
    )
}
export default Header
