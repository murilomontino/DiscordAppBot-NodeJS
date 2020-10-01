import React, { Suspense, memo } from 'react'
import MiniDrawer from '../../components/DrawerMenu/drawer'
import { useRouter } from '../../context/ContextRouter'
import './styles.css'




function Home() {
	const { routerComponent, selectedItemOnMenu } = useRouter()


	return (

	
		<div className='main-container'>
			
			<MiniDrawer/>
			
			<div className="right-main-container">
				<Suspense fallback={<div>Loading...</div>}>
					{routerComponent(selectedItemOnMenu.title)}
				</Suspense>
			</div>
			
		</div>
		
	)
}

export default memo(Home)
