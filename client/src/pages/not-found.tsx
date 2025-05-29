import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-[#9B9B9B]" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">404 Page Not Found</h1>
          </div>

          <p className="text-base text-gray-300">
            The page you're looking for doesn't seem to exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
