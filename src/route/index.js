import { 
    HomeScreen,
    RoomsScreen,
    RoomDetailScreen,
    PatientDetailScreen,
    PatientsScreen,
    HospitalScreen,
    DoctorsScreen
} from '../screens'

export const appRoute = {
    Home: {
        screen: HomeScreen
    },
    Rooms: {
        screen: RoomsScreen
    },
    Room: {
        screen: RoomDetailScreen
    },
    Patient: {
        screen: PatientDetailScreen
    },
    Patients: {
        screen: PatientsScreen
    },
    Hospital: {
        screen: HospitalScreen
    },
    Doctors: {
        screen: DoctorsScreen
    },
}