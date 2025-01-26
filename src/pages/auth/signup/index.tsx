import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../../../context/userProvider";
import { log } from "console";

export default function Login() {
  const [input, setInput] = useState<string>("");
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const [inputType, setInputType] = useState<"email" | "phone" | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Simple validation to determine if input is email or phone
    if (value.includes("@")) {
      setInputType("email");
    } else if (/^\d+$/.test(value)) {
      setInputType("phone");
    } else {
      setInputType(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", { type: inputType, value: input });
  };

  const handleGoogleSignup = async (response: any) => {
    try {
      const credential = response.credential;
      const userDetails = await getUserDetails(credential);
      if (userDetails) {
        setUser(userDetails);
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const getUserDetails = async (credential: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching user details: ${response.statusText}`);
      }

      const userDetails = await response.json();
      return userDetails;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
  };

  const handleGoogleError = (error: any) => {
    console.error("Google login error:", error);
  };

  console.log(import.meta.env.Client_ID);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px] h-[450px] flex justify-center align-center flex-col">
        <CardHeader>
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 w-auto m-auto cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <CardTitle className="text-center text-pretty text-xl">
            Create Account
          </CardTitle>

          <CardDescription className="text-xs text-center">
            Enter your email or phone to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="emailOrPhone"
                  placeholder="Enter your email or phone number"
                  value={input}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            className="w-full bg-[#4460FA]"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleSignup}
            onError={handleGoogleError}
            className="w-full"
            useOneTap
            theme="outline"
            clientId={`${import.meta.env.VITE_Client_ID}` || ""}
          >
            <Button variant="outline" className="w-full">
              <FcGoogle className="h-12 font-xl w-12" />
              <span className="ml-2">Sign in with Google</span>
            </Button>
          </GoogleLogin>
        </CardFooter>
      </Card>
    </div>
  );
}
