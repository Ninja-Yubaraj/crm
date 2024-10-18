"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { EyeIcon, EyeOffIcon} from "lucide-react"
import Image from "next/image"

export default function SignInForm() {
     const [showPassword, setShowPassword] = useState(false)

     return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
               <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                         <div className="flex justify-center mb-6">
                              <div className="relative w-40">
                                   <Image src="/aboard.svg" alt="Aborad logo" width="2000" height="2000" className="w-full"/>
                              </div>
                         </div>
                         <h2 className="text-2xl font-bold text-center mb-6">Options Abroad</h2>
                         <h3 className="text-xl font-semibold text-center mb-6">Sign in</h3>
                         <form className="space-y-4">
                              <div className="space-y-2">
                                   <Label htmlFor="email">Email address<span className="text-red-500">*</span></Label>
                                   <Input id="email" type="email" required />
                              </div>
                              <div className="space-y-2">
                                   <Label htmlFor="password">Password<span className="text-red-500">*</span></Label>
                                   <div className="relative">
                                        <Input
                                             id="password"
                                             type={showPassword ? "text" : "password"}
                                             required
                                        />
                                        <button
                                             type="button"
                                             className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                             onClick={() => setShowPassword(!showPassword)}
                                        >
                                             {showPassword ? (
                                                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                             ) : (
                                                  <EyeIcon className="h-5 w-5 text-gray-400" />
                                             )}
                                        </button>
                                   </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                   <Checkbox id="remember" />
                                   <Label htmlFor="remember">Remember me</Label>
                              </div>
                              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                                   Sign in
                              </Button>
                         </form>
                    </CardContent>
               </Card>
          </div>
     )
}