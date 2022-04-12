import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  // Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

// const Logo = () => {
//   return <Image src="favicon-32x32.png" alt="logo" />;
// };

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.700", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        w="100%"
        bg={useColorModeValue("brand.800", "gray.900")}
        color={useColorModeValue("gray.50", "gray.200")}
        px={[10, 20]}
        py={[5]}
      >
        <Stack mb={7} textAlign={"center"} align={"center"}>
          <Box>
            <Text fontSize={"1rem"}>News Letter</Text>
            <Text color="neutral.400">
              Subscribe to the newsletter to be up to date
            </Text>
          </Box>
          <Stack direction={"row"} w={["100%", "70%"]} alignItems={"center"}>
            <Input
              placeholder={"Your email address"}
              bg={useColorModeValue("whiteAlpha.100", "blackAlpha.100")}
              border={0}
              _focus={{
                bg: "whiteAlpha.300",
              }}
              w="100%"
              p={6}
            />
            <IconButton
              bg={useColorModeValue("secondary.100", "blue.800")}
              color={useColorModeValue("white", "gray.800")}
              _hover={{
                bg: "blue.600",
              }}
              aria-label="Subscribe"
              icon={<BiMailSend />}
            />
          </Stack>
        </Stack>
      </Box>
      <Box
        bg={useColorModeValue("brand.900", "gray.900")}
        color={useColorModeValue("gray.50", "gray.200")}
        px={{ base: "10" }}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr  1fr 1fr" }}
            spacing={"8"}
          >
            <Stack align={"flex-start"}>
              <ListHeader>Get In Touch</ListHeader>
              <Link href={"#"}>Office Address</Link>
              <Link href={"#"}>Office Address</Link>

              <Link href={"#"}>Office Address</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Contact us</Link>
              <Link href={"#"}>Testimonials</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>FAQs</Link>
              <Link href={"#"}>Legal</Link>
            </Stack>
            <Stack spacing={6}>
              <Text fontSize={"sm"}>Follow us on social media</Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        bg={useColorModeValue("black", "gray.900")}
        color={useColorModeValue("gray.50", "gray.200")}
        px={{ base: "10" }}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Starr Properties Inc. All rights reserved</Text>
        </Container>
      </Box>
    </>
  );
}
