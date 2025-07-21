import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function TotSnel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Bedankt voor uw bericht!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We hebben uw aanvraag ontvangen en nemen zo spoedig mogelijk contact met u op.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Terug naar homepage
          </Link>
        </div>
      </div>
    </div>
  );
}