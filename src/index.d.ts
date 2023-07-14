import Config from "./types/Config";
import Authorization from "./modules/Authorization";
import Feature from "./modules/Feature";
import Permission from "./modules/Permission";
import PricingTier from "./modules/PricingTier";
import Role from "./modules/Role";
import Session from "./modules/Session";
import Tenant from "./modules/Tenant";
import User from "./modules/User";
import Warrant from "./modules/WarrantModule";

declare module "auth4flow" {
  export class Auth4FlowClient {
    static Auth4FlowClient: typeof Auth4FlowClient;

    constructor(config: Config);

    Authorization: typeof Authorization;
    Feature: typeof Feature;
    Permission: typeof Permission;
    PricingTier: typeof PricingTier;
    Role: typeof Role;
    Session: typeof Session;
    Tenant: typeof Tenant;
    User: typeof User;
    Warrant: typeof Warrant;
  }

  export default Auth4FlowClient;
}
