import { XCircleIcon } from '@heroicons/react/20/solid'

export default function ErrorListNotification({
    errors
}: {
    errors: string[];
}) {
  return (
    <div className="rounded-md bg-red-50 p-4 my-7 ">
      <div className="flex">
        
        <div className="ml-3">
          
          <div className="mt-2 text-sm text-color-palette-red-100">
            <ul role="list" className="list-disc space-y-1 pl-5">
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}