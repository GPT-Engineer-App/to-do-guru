import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" width="100%" bg="gray.100" mt={10}>
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} Todo App. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;