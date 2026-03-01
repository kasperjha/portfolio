export default () => ({
  'config-sync': {
    enabled: true,
    config: {
      importOnBootstrap: true,
      excludedConfig: [
        'core-store.plugin_users-permissions_grant',
        'core-store.plugin_upload_metrics',
        'core-store.strapi_content_types_schema',
        'core-store.ee_information',
        'core-store.strapi_unidirectional-join-table-repair-ran'
      ]
    }
  }
});
