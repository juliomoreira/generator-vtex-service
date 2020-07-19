import {
  ExternalClient,
  InstanceOptions,
  IOContext,
} from "@vtex/api";

export default class <%= className %> extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("<%= baseURL %>", context, options);
  }
}
