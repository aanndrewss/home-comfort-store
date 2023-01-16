import styles from '@/styles/Home.module.scss'
import MetaTitle from '@/app/MetaTitle'
import { withLayout } from '@/app/layout/Layout'
import { HomeComponent } from '@/app/components/HomeComponent/HomeComponent'

const Home = () => {
	return (
		<>
			<MetaTitle
				title="Home Comfort Store"
				description="Home where you can buy comfort"
			/>
			<HomeComponent />
		</>
	)
}

export default withLayout(Home)
