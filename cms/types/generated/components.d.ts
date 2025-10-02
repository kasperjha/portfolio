import type { Schema, Struct } from '@strapi/strapi';

export interface AppWebsiteAbout extends Struct.ComponentSchema {
  collectionName: 'components_app_website_abouts';
  info: {
    displayName: 'WebsiteAbout';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    ingress: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AppWebsiteMockups extends Struct.ComponentSchema {
  collectionName: 'components_app_website_mockups';
  info: {
    displayName: 'WebsiteMockups';
    icon: 'television';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AppWebsiteTestemonial extends Struct.ComponentSchema {
  collectionName: 'components_app_website_testemonials';
  info: {
    displayName: 'WebsiteTestemonial';
    icon: 'emotionHappy';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    company_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'app.website-about': AppWebsiteAbout;
      'app.website-mockups': AppWebsiteMockups;
      'app.website-testemonial': AppWebsiteTestemonial;
    }
  }
}
