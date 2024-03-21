
interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

export default function Heading({
  title, subTitle, center
}: HeadingProps) {
  return (
    <div>
      <h1 className="text-2xl text-gray-900 font-bold">
        { title }
      </h1>
      {
        !!subTitle &&
        <h2 className="mt-2 font-light text-gray-600">
          { subTitle }
        </h2>
      }
    </div>
  )
}
