export interface setStats{
    setStrength: React.Dispatch<React.SetStateAction<number>>,
    setDexterity: React.Dispatch<React.SetStateAction<number>>,
    setConstitution: React.Dispatch<React.SetStateAction<number>>,
    setInteligence: React.Dispatch<React.SetStateAction<number>>,
    setWisdom: React.Dispatch<React.SetStateAction<number>>,
    setCharisma: React.Dispatch<React.SetStateAction<number>>
}
export interface setHealth{
    setHitPoints: React.Dispatch<React.SetStateAction<number>>,
    setHitPointsMax: React.Dispatch<React.SetStateAction<number>>,
    setHitPointsTemp: React.Dispatch<React.SetStateAction<number>>
}
export interface setCombatStats{
    setInitative: React.Dispatch<React.SetStateAction<number>>,
    setArmorClass: React.Dispatch<React.SetStateAction<number>>,
    setSpeed: React.Dispatch<React.SetStateAction<number>>
}