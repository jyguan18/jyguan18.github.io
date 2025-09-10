export default function ResumePage() {
  return (
    <div className="flex flex-col justify-center flex-grow px-4 sm:px-6 md:px-10 overflow-y-auto">
      <div className="max-w-full sm:max-w-full md:max-w-5xl mx-auto bg-midnight rounded p-6 md:p-10 space-y-8 text-center w-full h-full">
        <iframe
          src="pdfs/Resume-CG.pdf"
          className="w-full h-full max-w-5xl border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}
