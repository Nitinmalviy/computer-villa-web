import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <footer className="bg-white  text-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="YourLogo"
              className="h-16 w-auto mb-4 mx-auto"
            />
            <p className="text-lg text-center">
              Your trusted source for electronic products and solutions. We're
              here to provide you with the best.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="#"
                className="text-primary hover:text-blue-300 transition-colors duration-200"
              >
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-blue-300 transition-colors duration-200"
              >
                <IoLogoFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
              Contact Us
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Updated Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-1 md:col-span-2 relative">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <div>
                          <Textarea
                            placeholder="Your message"
                            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
                            {...field}
                            maxLength={300}
                          />
                          {/* Character Counter */}
                          <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                            {field.value?.length || 0}/300
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 text-right">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-md px-6 py-3 w-full md:w-auto hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
}
