import React from 'react'
// Components
import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import {
  Page,
  PageContent,
  PageMenu
} from '@uncover/games-common'
import { Home } from '../../components/home/Home'
import { HomeMenuSettings } from '../../components/home/menu/HomeMenuSettings'
import { HomeMenu } from '../../components/home/menu/HomeMenu'
import { HomeContentSettingsAudio } from '../../components/home/content/settings/HomeContentSettingsAudio'
import { HomeContentSettingsDisplay } from '../../components/home/content/settings/HomeContentSettingsDisplay'
import { HomeContentSettingsGeneral } from '../../components/home/content/settings/HomeContentSettingsGeneral'
import { HomeContentCredits } from '../../components/home/content/credits/HomeContentCredits'
import { HomeContentPlay } from '../../components/home/content/play/HomeContentPlay'

const RouteHome = () => {

  // Rendering //

  return (
    <Home>
      <Page>

        <PageMenu>
          <Routes>
            <Route path='play' element={<HomeMenu />} />
            <Route path='settings'>
              <Route path='general' element={<HomeMenuSettings />} />
              <Route path='audio' element={<HomeMenuSettings />} />
              <Route path='display' element={<HomeMenuSettings />} />
              <Route path='*' element={<Navigate to='/settings/general' replace={true} />} />
            </Route>
            <Route path='credits' element={<HomeMenu />} />
            <Route path='*' element={<Navigate to='/play' replace={true} />} />
          </Routes>
        </PageMenu>

        <PageContent>
          <Routes>
            <Route path='play' element={<HomeContentPlay />} />
            <Route path='settings'>
              <Route path='general' element={<HomeContentSettingsGeneral />} />
              <Route path='audio' element={<HomeContentSettingsAudio />} />
              <Route path='display' element={<HomeContentSettingsDisplay />} />
              <Route path='*' element={<Navigate to='/settings/general' replace={true} />} />
            </Route>
            <Route path='credits' element={<HomeContentCredits />} />
            <Route path='*' element={<div />} />
          </Routes>
        </PageContent>

      </Page>
    </Home>
  )
}

export default RouteHome