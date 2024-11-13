import { AppearanceForm } from './appearance-form'
import ContentSection from '../components/content-section'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='Theme'
      desc='Select the theme for the dashboard.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}