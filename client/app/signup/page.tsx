"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    orgName: "",
    brn: "",
    adminName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded authorization logic
    if (
      formData.orgName === "Techcorp" &&
      formData.brn === "123456" &&
      formData.adminName === "Zion Elekwachi" &&
      formData.password === "123456"
    ) {
      // Navigate to dashboard on success
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please verify your details.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Organization Sign Up</h1>
          <p className="text-sm text-muted-foreground">
            Enter your organization details to create an account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="orgName" className="text-sm font-medium leading-none text-foreground">
                Organisation Name
              </label>
              <Input
                id="orgName"
                name="orgName"
                placeholder="e.g. Techcorp"
                value={formData.orgName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="brn" className="text-sm font-medium leading-none text-foreground">
                Businesses Registration Number (BRN)
              </label>
              <Input
                id="brn"
                name="brn"
                placeholder="e.g. 123456"
                value={formData.brn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adminName" className="text-sm font-medium leading-none text-foreground">
                Admin Name
              </label>
              <Input
                id="adminName"
                name="adminName"
                placeholder="e.g. Zion Elekwachi"
                value={formData.adminName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none text-foreground">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {error && <p className="text-sm font-medium text-destructive">{error}</p>}

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-primary hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
