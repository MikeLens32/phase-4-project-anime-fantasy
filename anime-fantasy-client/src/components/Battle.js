import React from 'react'
// import Character from './Character'
import CharacterSummary from './CharacterSummary'

const Battle = () => {

    return (
        <div>
            <div>
                <CharacterSummary />
            </div>
            <div>
                <CharacterSummary user/>
            </div>
            {/* <Character /> */}
        </div>
    )
}

export default Battle
