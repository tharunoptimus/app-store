import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const appsDirectory = path.join(process.cwd(), "apps")

export function getSortedAppsData() {
	const fileNames = fs.readdirSync(appsDirectory)
	return fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "")

		// Read markdown file as string
		const fullPath = path.join(appsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")

		const matterResult = matter(fileContents)

		return {
			id,
			...matterResult.data,
		}
	})
}

export function getAllAppIds() {
	const fileNames = fs.readdirSync(appsDirectory)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		}
	})
}

export async function getAppData(id) {
	const fullPath = path.join(appsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")

	const matterResult = matter(fileContents)

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	return {
		id,
		contentHtml,
		...matterResult.data,
	}
}
