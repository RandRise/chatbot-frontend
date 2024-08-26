import { PackageModel } from "../models/PackageModel";
import { GenericResponse } from "../utils/GenericResponse";

export interface PackageState {
    packages: PackageModel[];
    loading: boolean;
    response: GenericResponse | null;
}
