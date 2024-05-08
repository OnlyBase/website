import { ProjectProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import { BsMeta, BsMedium } from "react-icons/bs";
import {
  ArrowLeftIcon,
  DiscordLogoIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface ProjectDetailHeaderProps {
  project: ProjectProps;
}

export default function ProjectDetailHeader({
  project,
}: ProjectDetailHeaderProps) {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <>
      <ArrowLeftIcon
        className="h-4 w-4 rounded-3xl shadow-lg shadow-gray-600 mb-6 cursor-pointer text-gray-300"
        onClick={handleGoBack}
      />
      <div className="flex flex-row items-center">
        <img
          alt={project.name}
          src={project?.image}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="pl-4 flex flex-col">
          <p className="text-3xl mb-2">{project?.name}</p>
          {project?.tags.map((tag) => (
            <Link href={`/?category=${tag.toLowerCase()}`}>
              <span
                key={tag}
                className={`rounded-full px-3 py-1 mb-1 text-sm font-semibold tag-${tag.toLowerCase()}`}
              >
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row pt-4 flex-wrap">
        <button
          type="button"
          onClick={() => router.push(`${project.github}`)}
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <GitHubLogoIcon className="h-4 w-4" />
        </button>

        {project.medium && (
          <button
            type="button"
            onClick={() => router.push(`${project.medium}`)}
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <BsMedium className="h-4 w-4" />
          </button>
        )}

        <button
          type="button"
          onClick={() => router.push(`${project.twitter}`)}
          className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
        >
          <TwitterLogoIcon className="h-4 w-4" />
        </button>

        {project.facebook && (
          <button
            type="button"
            onClick={() => router.push(`${project.facebook}`)}
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
          >
            <BsMeta className="h-4 w-4" />
          </button>
        )}

        {project.discord && (
          <button
            type="button"
            onClick={() => router.push(`${project.discord}`)}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <DiscordLogoIcon className="h-4 w-4" />
          </button>
        )}

        <button
          type="button"
          onClick={() => router.push(project.website)}
          className="text-white flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Website
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </button>
      </div>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-600 mb-8">
        <ul className="flex flex-wrap -mb-px mt-2">
          <li className="me-2">
            <a
              href="#overview"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 text-blue-400 hover:border-gray-300 "
            >
              Overview
            </a>
          </li>
          <li className="me-2">
            <a
              href="#related"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 text-white hover:border-gray-300"
              aria-current="page"
            >
              Related Apps
            </a>
          </li>
          <li className="me-2">
            <a
              href="#faq"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 text-white hover:border-gray-300"
            >
              FAQs
            </a>
          </li>
          <li className="me-2">
            <a
              href="#tokenoverview"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 text-white hover:border-gray-300"
            >
              Token Overview
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
