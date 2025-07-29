import { Navbar } from "@/components/navbar";
import WebhookContactForm from "@/components/WebhookContactForm";
import { Footer } from "@/components/sections/footer";

export default function ContactTest() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                🧪 Webhook Test Pagina
              </h1>
              <p className="text-lg text-gray-600">
                Test de GoHighLevel webhook integratie met dual-submission systeem
              </p>
            </div>

            <div className="grid gap-8">
              {/* Test Form 1: Basic Contact */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Basic Contact Form</h2>
                <WebhookContactForm
                  title="Test Contact Form"
                  subtitle="Test de basis functionaliteit"
                  showCityField={true}
                  showServiceField={false}
                  redirectUrl="#"
                  formType="test_basic"
                />
              </div>

              {/* Test Form 2: Full Service Form */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Full Service Form</h2>
                <WebhookContactForm
                  title="Service Aanvraag Test"
                  subtitle="Test met alle velden inclusief service selectie"
                  showCityField={true}
                  showServiceField={true}
                  redirectUrl="#"
                  formType="test_service"
                />
              </div>

              {/* Test Form 3: Minimal Form */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Minimal Form</h2>
                <WebhookContactForm
                  title="Minimaal Contact"
                  subtitle="Test met minimale velden"
                  showCityField={false}
                  showServiceField={false}
                  redirectUrl="#"
                  formType="test_minimal"
                />
              </div>
            </div>

            {/* Testing Instructions */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                🔍 Testing Instructies
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Vul de formulieren in met test data</li>
                <li>• Check browser console voor debug logs</li>
                <li>• Controleer GoHighLevel voor inkomende leads</li>
                <li>• Verifieer EmailJS backup systeem</li>
                <li>• Test zowel succesvolle als gefaalde submissions</li>
              </ul>
            </div>

            {/* Debug Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                🛠️ Debug Informatie
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Webhook URL:</strong> https://services.leadconnectorhq.com/hooks/...</p>
                <p><strong>EmailJS Service:</strong> {import.meta.env.VITE_EMAILJS_SERVICE_ID || 'Not configured'}</p>
                <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
                <p><strong>Build Time:</strong> {new Date().toISOString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}